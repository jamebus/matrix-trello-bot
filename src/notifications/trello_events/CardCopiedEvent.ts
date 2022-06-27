import { TrelloEvent } from "./TrelloEvent";
import { getCardUrl, TrelloCard } from "../../trello/models/card";
import { TrelloList } from "../../trello/models/list";
import { TrelloMember } from "../../trello/models/member";
import { TrelloBoard } from "../../trello/models/board";
import { TrelloEvents } from "./TrelloEvents";

export class CardCopiedEvent extends TrelloEvent {
    constructor(card: TrelloCard, source: TrelloCard, list: TrelloList, creator: TrelloMember, board: TrelloBoard) {
        super(board, TrelloEvents.CARD_COPIED);
        this.templateString = `{member} copied the card <a href="{source_url}">{source_name}</a> to <a href="{card_url}">{card_name}</a> under {list_name}`;
        this.templateStringWithBoard = this.templateString + " on {board_name}";
        this.templateVariables = {
            member: creator.fullName,
            source_name: source.name,
            source_url: getCardUrl(source),
            card_name: card.name,
            card_url: getCardUrl(card),
            list_name: list.name,
            board_name: board.name,
        };
    }
}