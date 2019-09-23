'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createStackedLayoutStyle;

/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */
function createStackedLayoutStyle(_ref) {
  var bubbleMaxWidth = _ref.bubbleMaxWidth,
    bubbleMinWidth = _ref.bubbleMinWidth,
    paddingRegular = _ref.paddingRegular;
  return {
    '&.webchat__stacked_extra_left_indent': {
      marginLeft: paddingRegular * 2
    },
    '&:not(.webchat__stacked_extra_left_indent)': {
      marginLeft: paddingRegular
    },
    '&.webchat__stacked_extra_right_indent': {
      marginRight: paddingRegular * 2
    },
    '&:not(.webchat__stacked_extra_right_indent)': {
      marginRight: paddingRegular
    },
    '&:not(.from-user)': {
      '&.webchat__stacked_indented_content > .avatar': {
        marginRight: paddingRegular
      },
      '& > .content > .webchat__stacked_item_indented': {
        marginLeft: paddingRegular
      }
    },
    '&.from-user': {
      '&.webchat__stacked_indented_content > .avatar': {
        marginLeft: paddingRegular
      },
      '& > .content > .webchat__stacked_item_indented': {
        marginRight: paddingRegular
      }
    },
    '& > .content': {
      '& > .webchat__row': {
        '& > .bubble, & > .timestamp': {
          maxWidth: bubbleMaxWidth
        },
        '&.attachment > .bubble': {
          minWidth: bubbleMinWidth
        }
      },
      '& > *:not(:first-child):not(:last-child)': {
        marginTop: paddingRegular
      }
    },
    '&.ltr.from-user > .avatar': {
      marginLeft: paddingRegular
    },
    '&.ltr:not(.from-user) > .avatar': {
      marginRight: paddingRegular
    },
    '&.rtl.from-user > .avatar': {
      marginRight: paddingRegular
    },
    '&.rtl:not(.from-user) > .avatar': {
      marginLeft: paddingRegular
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvU3RhY2tlZExheW91dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdGFja2VkTGF5b3V0U3R5bGUiLCJidWJibGVNYXhXaWR0aCIsImJ1YmJsZU1pbldpZHRoIiwicGFkZGluZ1JlZ3VsYXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSx3QkFBVCxPQUFzRjtBQUFBLE1BQWxEQyxjQUFrRCxRQUFsREEsY0FBa0Q7QUFBQSxNQUFsQ0MsY0FBa0MsUUFBbENBLGNBQWtDO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUNuRyxTQUFPO0FBQ0wsNENBQXdDO0FBQ3RDQyxNQUFBQSxVQUFVLEVBQUVELGNBQWMsR0FBRztBQURTLEtBRG5DO0FBS0wsa0RBQThDO0FBQzVDQyxNQUFBQSxVQUFVLEVBQUVEO0FBRGdDLEtBTHpDO0FBU0wsNkNBQXlDO0FBQ3ZDRSxNQUFBQSxXQUFXLEVBQUVGLGNBQWMsR0FBRztBQURTLEtBVHBDO0FBYUwsbURBQStDO0FBQzdDRSxNQUFBQSxXQUFXLEVBQUVGO0FBRGdDLEtBYjFDO0FBaUJMLHlCQUFxQjtBQUNuQix1REFBaUQ7QUFDL0NFLFFBQUFBLFdBQVcsRUFBRUY7QUFEa0MsT0FEOUI7QUFLbkIsd0RBQWtEO0FBQ2hEQyxRQUFBQSxVQUFVLEVBQUVEO0FBRG9DO0FBTC9CLEtBakJoQjtBQTJCTCxtQkFBZTtBQUNiLHVEQUFpRDtBQUMvQ0MsUUFBQUEsVUFBVSxFQUFFRDtBQURtQyxPQURwQztBQUtiLHdEQUFrRDtBQUNoREUsUUFBQUEsV0FBVyxFQUFFRjtBQURtQztBQUxyQyxLQTNCVjtBQXFDTCxvQkFBZ0I7QUFDZCwyQkFBcUI7QUFDbkIsdUNBQStCO0FBQzdCRyxVQUFBQSxRQUFRLEVBQUVMO0FBRG1CLFNBRFo7QUFLbkIsa0NBQTBCO0FBQ3hCTSxVQUFBQSxRQUFRLEVBQUVMO0FBRGM7QUFMUCxPQURQO0FBV2Qsa0RBQTRDO0FBQzFDTSxRQUFBQSxTQUFTLEVBQUVMO0FBRCtCO0FBWDlCLEtBckNYO0FBcURMLGlDQUE2QjtBQUMzQkMsTUFBQUEsVUFBVSxFQUFFRDtBQURlLEtBckR4QjtBQXlETCx1Q0FBbUM7QUFDakNFLE1BQUFBLFdBQVcsRUFBRUY7QUFEb0IsS0F6RDlCO0FBNkRMLGlDQUE2QjtBQUMzQkUsTUFBQUEsV0FBVyxFQUFFRjtBQURjLEtBN0R4QjtBQWlFTCx1Q0FBbUM7QUFDakNDLE1BQUFBLFVBQVUsRUFBRUQ7QUFEcUI7QUFqRTlCLEdBQVA7QUFxRUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMl0gfV0gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RhY2tlZExheW91dFN0eWxlKHsgYnViYmxlTWF4V2lkdGgsIGJ1YmJsZU1pbldpZHRoLCBwYWRkaW5nUmVndWxhciB9KSB7XG4gIHJldHVybiB7XG4gICAgJyYud2ViY2hhdF9fc3RhY2tlZF9leHRyYV9sZWZ0X2luZGVudCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyICogMlxuICAgIH0sXG5cbiAgICAnJjpub3QoLndlYmNoYXRfX3N0YWNrZWRfZXh0cmFfbGVmdF9pbmRlbnQpJzoge1xuICAgICAgbWFyZ2luTGVmdDogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYud2ViY2hhdF9fc3RhY2tlZF9leHRyYV9yaWdodF9pbmRlbnQnOiB7XG4gICAgICBtYXJnaW5SaWdodDogcGFkZGluZ1JlZ3VsYXIgKiAyXG4gICAgfSxcblxuICAgICcmOm5vdCgud2ViY2hhdF9fc3RhY2tlZF9leHRyYV9yaWdodF9pbmRlbnQpJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgfSxcblxuICAgICcmOm5vdCguZnJvbS11c2VyKSc6IHtcbiAgICAgICcmLndlYmNoYXRfX3N0YWNrZWRfaW5kZW50ZWRfY29udGVudCA+IC5hdmF0YXInOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiBwYWRkaW5nUmVndWxhclxuICAgICAgfSxcblxuICAgICAgJyYgPiAuY29udGVudCA+IC53ZWJjaGF0X19zdGFja2VkX2l0ZW1faW5kZW50ZWQnOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9XG4gICAgfSxcblxuICAgICcmLmZyb20tdXNlcic6IHtcbiAgICAgICcmLndlYmNoYXRfX3N0YWNrZWRfaW5kZW50ZWRfY29udGVudCA+IC5hdmF0YXInOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9LFxuXG4gICAgICAnJiA+IC5jb250ZW50ID4gLndlYmNoYXRfX3N0YWNrZWRfaXRlbV9pbmRlbnRlZCc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9XG4gICAgfSxcblxuICAgICcmID4gLmNvbnRlbnQnOiB7XG4gICAgICAnJiA+IC53ZWJjaGF0X19yb3cnOiB7XG4gICAgICAgICcmID4gLmJ1YmJsZSwgJiA+IC50aW1lc3RhbXAnOiB7XG4gICAgICAgICAgbWF4V2lkdGg6IGJ1YmJsZU1heFdpZHRoXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyYuYXR0YWNobWVudCA+IC5idWJibGUnOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGJ1YmJsZU1pbldpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcmID4gKjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9XG4gICAgfSxcblxuICAgICcmLmx0ci5mcm9tLXVzZXIgPiAuYXZhdGFyJzoge1xuICAgICAgbWFyZ2luTGVmdDogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYubHRyOm5vdCguZnJvbS11c2VyKSA+IC5hdmF0YXInOiB7XG4gICAgICBtYXJnaW5SaWdodDogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYucnRsLmZyb20tdXNlciA+IC5hdmF0YXInOiB7XG4gICAgICBtYXJnaW5SaWdodDogcGFkZGluZ1JlZ3VsYXJcbiAgICB9LFxuXG4gICAgJyYucnRsOm5vdCguZnJvbS11c2VyKSA+IC5hdmF0YXInOiB7XG4gICAgICBtYXJnaW5MZWZ0OiBwYWRkaW5nUmVndWxhclxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
