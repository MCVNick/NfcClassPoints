import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

export const initNfc = async () => {
  await NfcManager.start();
};

export const readNdef = ({setAsciiNFC, setCardInfo}) => {
  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  return new Promise(resolve => {
    let tagFound = null;

    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      tagFound = tag;
      resolve(tagFound);
      // NfcManager.setAlertMessageIOS('NDEF tag found');
      NfcManager.setAlertMessage('NDEF tag Found');
      NfcManager.unregisterTagEvent().catch(() => 0);
      let setStudentCardInfoHelper = {
        ndefMessage: tag.ndefMessage,
        setCardInfo,
      };
      setStudentCardInfo(setStudentCardInfoHelper);
      let setAsciiHelper = {setAsciiNFC, setCardInfo};
      setAsciiNFC(readNdef(setAsciiHelper));
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
};

export const setStudentCardInfo = ({ndefMessage, setCardInfo}) => {
  let asciiDataConversion = [];

  ndefMessage.forEach(messageObject => {
    const {payload, type} = messageObject;
    let payloadMessage = [];
    let typeMessage = [];

    payload.forEach(payloadElement => {
      payloadMessage.push(String.fromCharCode(payloadElement));
    });
    type.forEach(typeElement => {
      typeMessage.push(String.fromCharCode(typeElement));
    });

    if (typeMessage) {
      if (typeMessage.join('').includes('text/')) {
        typeMessage = typeMessage.join('').replace('text/', '');
        asciiDataConversion.push({
          [typeMessage]: payloadMessage.join(''),
        });
      } else if (typeMessage.join('').includes('integer/')) {
        typeMessage = typeMessage.join('').replace('integer/', '');
        asciiDataConversion.push({
          [typeMessage]: parseInt(payloadMessage.join('')),
        });
      }
    }
  });

  asciiDataConversion.length > 0 &&
    setCardInfo(Object.assign({}, ...asciiDataConversion));
};
