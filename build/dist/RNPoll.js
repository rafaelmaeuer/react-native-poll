import * as React from "react";
import { View, ScrollView } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./RNPoll.style";
import RNPollItem from "./components/RNPollItem";
import { countPercentage } from "./utils/RNPoll.utils";
const RNPoll = ({ style, choices, totalVotes, pollContainerStyle, hasBeenVoted = false, disableBuiltInIncreaseVote = false, votedChoiceByID = undefined, PollItemContainer = View, PollContainer = View, onChoicePress, ...rest }) => {
    const [_hasBeenVoted, setHasBeenVoted] = React.useState(hasBeenVoted);
    const [votedChoice, setVotedChoice] = React.useState(votedChoiceByID);
    return (<View style={style}>
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
        <PollContainer style={[styles.pollContainer, pollContainerStyle]} {...rest}>
          {choices.map((eachChoice) => {
            const { choice, id, votes } = eachChoice;
            const percentage = _hasBeenVoted
                ? countPercentage(votes, totalVotes)
                : 0;
            return (<RNPollItem {...rest} pollId={id} key={id} text={choice} disabled={_hasBeenVoted} percentage={percentage} hasBeenVoted={_hasBeenVoted} votedChoiceByID={votedChoice} PollItemContainer={PollItemContainer} onPress={() => {
                    setHasBeenVoted(true);
                    setVotedChoice(id);
                    !disableBuiltInIncreaseVote &&
                        (eachChoice.votes = eachChoice.votes + 1);
                    onChoicePress && onChoicePress(eachChoice);
                }}/>);
        })}
        </PollContainer>
      </ScrollView>
    </View>);
};
export default RNPoll;
//# sourceMappingURL=RNPoll.js.map