import * as React from "react";
import { ViewStyle } from "react-native";
import { ClusterParams } from ".";
declare type Props = {
    cluster: ClusterParams;
    style?: ViewStyle;
    textStyle?: ViewStyle;
    onPress?: (params: ClusterParams) => void;
};
export default class ClusterView extends React.PureComponent<Props> {
    onPress: () => void;
    renderClusterView: () => JSX.Element;
    render(): JSX.Element;
}
export {};
