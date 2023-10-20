const ourSettingsInitialState = {
  settings: {
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      telegram: "https://telegram.org/",
      phones: [
        "+38 (098) 501 73 73",
        "+38 (073) 501 73 73",
        "+38 (050) 501 73 73",
        "+38 (044) 501 73 73",
      ],
      date: 2023,
      email: "info@comtrading.ua",
      siteName: "comtrading",
    },
    timeWork: [
      "Пн. - Пт. з 09:00 до 19:00",
      "Сб. з 10:00 до 14:00",
      "Вс. - выходной",
    ],
  },
};
export const ourSettingsReducer = (state = ourSettingsInitialState, action) => {
  switch (action.type) {
    // case SIMPLEHELLOWORLD:
    //     return [
    //         ...state,
    //         {
    //             title: action.payload.title,
    //             text: action.payload.text
    //         }
    //     ]
    default:
      return state;
  }
};
