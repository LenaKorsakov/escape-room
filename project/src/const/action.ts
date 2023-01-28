export const Action = {
  FetchAllQuests: 'quest/fetchQuestsPreview',
  FetchQuestById: 'property/fetchQuestById',

  FetchQuestBookingInfoById: 'booking/fetchQuestBookingInfoById',
  SendBookingInfo: 'booking/sendBookingInfo',

  FetchReservations: 'reservation/fetchReservations',
  DeleteReservationById: 'reservation/deleteReservationById',

  CheckAuthorizationStatus: 'user/checkAuthorizationStatus',
  UserLogIn: 'user/login',
  UserLogOut: 'user/logout',

  DisplayError: 'app/displayError'
} as const;
