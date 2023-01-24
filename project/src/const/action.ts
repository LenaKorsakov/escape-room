export const Action = {
  FetchAllQuests: 'quest/fetchQuestsPreview',
  FetchQuestById: 'property/fetchQuestById',

  FetchQuestBookingInfoById: 'booking/fetchQuestInfoById',
  SendBookingInfo: 'booking/sendBookingInfo',

  FetchUserReservations: 'reservation/fetchUserReservations',
  DeleteReservationById: 'reservation/deleteReservationById',

  CheckAuthorizationStatus: 'user/checkAuthorizationStatus',
  UserLogIn: 'user/login',
  UserLogOut: 'user/logout',
} as const;
