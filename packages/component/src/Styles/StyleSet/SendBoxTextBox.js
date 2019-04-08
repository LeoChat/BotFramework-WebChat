export default function createSendBoxTextBoxStyle({
  paddingRegular,
  sendBoxTextBoxBorderColor,
  primaryFont,
  sendBoxTextColor
}) {
  return  {
    alignItems: 'center',
    fontFamily: primaryFont,

    '& > input': {
      border: '1px solid #cccccc',
      color: sendBoxTextColor,
      fontFamily: 'inherit',
      height: '35px',
      margin: '0 12px',
      borderRadius: '18px',
      fontSize: '16px',
      outline: 0,
      paddingBottom: 0,
      paddingLeft: paddingRegular,
      paddingRight: paddingRegular,
      paddingTop: 0,
      transition: 'box-shadow 0.3s ease-in-out'
    },

    '& > input:focus': {
        border: '1px solid ' + sendBoxTextBoxBorderColor,
        boxShadow: 'inset 0 0 3px 1px rgba(198, 198, 198, 0.5)'
    }
  };
}
