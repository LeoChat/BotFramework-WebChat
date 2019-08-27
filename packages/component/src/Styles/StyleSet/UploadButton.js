export default function createUploadButtonStyle({
  sendBoxButtonColor,
  sendBoxButtonColorOnFocus,
  sendBoxButtonColorOnHover
}) {
  return {
    // We use the sendBoxHeight, so the button looks square
    width: 40,
    paddingLeft: 10,
    paddingRight: 10,

    '& > .icon > svg': {
      fill: sendBoxButtonColor
    },

    '& > input:hover + .icon > svg': {
      fill: sendBoxButtonColorOnHover
    },

    '& > input:focus + .icon > svg': {
      fill: sendBoxButtonColorOnFocus
    }
  };
}
