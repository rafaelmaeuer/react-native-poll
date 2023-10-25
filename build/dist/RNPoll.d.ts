import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { IRNPollItemProps } from "./components/RNPollItem";
export interface IChoice {
    id: number;
    votes: number;
    choice: string;
}
export interface IRNPollProps extends Omit<IRNPollItemProps, "hasBeenVoted"> {
    totalVotes: number;
    hasBeenVoted?: boolean;
    votedChoiceByID?: number;
    disableBuiltInIncreaseVote?: boolean;
    choices: Array<IChoice>;
    style?: StyleProp<ViewStyle>;
    pollContainerStyle?: StyleProp<ViewStyle>;
    PollContainer?: any;
    PollItemContainer?: any;
    onChoicePress: (selectedChoice: IChoice) => void;
}
declare const RNPoll: React.FC<IRNPollProps>;
export default RNPoll;
