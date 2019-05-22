export default function ({
  typingAnimationBackgroundImage,
  typingAnimationHeight,
  typingAnimationWidth,
}) {
  const backgroundImage = typingAnimationBackgroundImage ? typingAnimationBackgroundImage : 'url(\'data:image/gif;base64,R0lGODlhQAAYAPYBAOzv8evu8Ort7+fq7Ons7ujr7eXo6uTn6ebp6+Xn6ebo6uzu8OPm6OTm6OPm5+Tn6N/i4+Ll59/i5N7h4+Hk5uDj5evu7+Hk5d/h49PV18PFx7/BwsfJysXHyMLExdja3Nfa28vNz72/wL7Awc/S08TGyMDCw9TW2NbY2t3g4trd39bZ2szO0M7Q0dnb3djb3Nvd39ve4Nnc3dze4Nrc3t7g4tzf4dXX2d3f4d7h4tnc3tve383P0MrMzs7Q0sjKzNLU1s/R08jKy9DT1NfZ293g4efp68bIyby+v9bZ27q8vdHT1c7R0uvt78nLzM/R0tjb3ens7bO0tbS2t7GztK+xsrW3uK6vsLe4utfa3L/Awtzf4MnLzamqq5WWl66wsbm7vNrd3uXo6a2ur6yurp2en6KjpKusrZ+goKeoqers7urt7peXmIGBgYSEhHx8fJmamqipqnZ2doqLi8XHyY2NjpGSkpOUlJiYmZOTlI+QkJqbm4eIiJucnIuMjP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOklu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\')'

  return {
    backgroundImage,
    backgroundRepeat: 'no-repeat',
    height: typingAnimationHeight,
    width: typingAnimationWidth
  };

}
