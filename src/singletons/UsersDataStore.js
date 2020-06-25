// STATIC SINGLETON
export const UserEvents = {
    SUBSCRIBED: "Subscribed",
    UNSUBSCRIBED: "Unsubscribed",
    PUBLIC_KEY_BROADCASTED: "PublicKeyBroadcasted",
    CREATED_CHANNEL: "CreatedChannel",
    DEACTIVATE_CHANNEL: "DeactivateChannel",
}

export default class UsersDataStore {
    static instance = UsersDataStore.instance || new UsersDataStore();

    state = {
    }

    // init
    init = (account, epnsReadProvider) => {

    }
}
