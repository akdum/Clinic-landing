import * as React from "react";
import { ILinks } from "../../shared/interfaces/ILinks";
import { Footer } from "../footer/Footer";

interface VKWindow extends Window {
    VK: any;
}

export class PageFooter extends React.Component<ILinks, null> {
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