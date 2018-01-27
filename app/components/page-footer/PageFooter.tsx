import * as React from "react";
import { Footer } from "../footer/Footer";
import { IPageFooterProps } from "./IPageFooterProps";

interface VKWindow extends Window {
    VK: any;
}

export class PageFooter extends React.Component<IPageFooterProps, null> {
    componentDidMount() {
        var options = {
            tooltipButtonText: "У Вас возникли вопросы?"
        };
        (window as VKWindow).VK.Widgets.CommunityMessages("vk_community_messages", 133747176, options);
    }
    render() {
        return (
            <div>
                <div id="vk_community_messages"></div>
                <Footer links={this.props.links} />
            </div>
        )
    }
}