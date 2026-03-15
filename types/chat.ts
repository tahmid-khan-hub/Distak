export interface Conversation {
    id: string;
    nickname: string;
}

export interface FoundUser {
    id: string;
    nickname: string;
}

export interface ConversationResponse {
  id: string;
  alreadyExists: boolean;
}