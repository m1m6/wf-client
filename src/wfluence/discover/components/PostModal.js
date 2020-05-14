import React, { useState } from 'react';
import { Modal, Drawer, Icon, Tag } from 'antd';
import extract from 'mention-hashtag';

import { nFormatter } from '../../../utils/numberUtils';
import { getColor } from '../utils';


const PostModal = ({ media }) => {
    let [visible, setVisible] = useState(false);

    const handleOk = async () => {
        setVisible(false);
    };

    const getTags = (caption) => {
        if (caption && caption.length > 0) {
            let tags = caption.match(/#[\p{L}]+/giu);
            return tags && tags.length > 0 ? tags : [];
        }
        return [];
    };

    const getMentions = (caption) => {
        if (caption && caption.length > 0) {
            let mentions = extract(caption, {
                symbol: false,
                unique: true,
            });

            return mentions && mentions.length > 0 ? mentions : [];
        }
        return [];
    };

    return !visible ? (
        <a onClick={() => setVisible(true)}>More Details >></a>
    ) : (
        <div>
            <Drawer
                placement="right"
                closable={false}
                onClose={handleOk}
                visible={visible}
                className="post-popover"
            >
                <div className="post-details">
                    <div
                        className="profile-header pointer"
                        onClick={() =>
                            window.open(
                                `https://instagram.com/${media.media.profile.username}`,
                                '_blank'
                            )
                        }
                        title={`Show ${media.media.profile.username} profile`}
                    >
                        <div
                            className="profile-img"
                            style={{
                                backgroundImage: `url(${
                                    (media.media.profile && media.media.profile.profilePic) || ''
                                })`,
                            }}
                        ></div>
                        <div className="name">{media.media.profile.name}</div>
                        <div className="link">
                            <Icon type="instagram" /> / <span>{media.media.profile.username}</span>
                        </div>
                        <Icon type="close" className="close-btn" onClick={handleOk} />
                    </div>
                    <div className="post-img-container">
                        <div
                            className="post-img pointer"
                            onClick={() => window.open(media.media.permalink, '_blank')}
                            style={{
                                backgroundImage: `url(${media.media.mediaUrl || ''})`,
                            }}
                            title={`Show Post`}
                        />
                    </div>
                    <div
                        className="interactions-box pointer"
                        onClick={() => window.open(media.media.permalink, '_blank')}
                        title={`Show Post`}
                    >
                        <div className="interaction">
                            <div>
                                <span className="gray">
                                    <Icon type="heart" />
                                </span>
                            </div>
                            <div>
                                <span className="bold">
                                    {nFormatter(media.media.likesCount) || '0'}
                                </span>
                                <br />
                                <span className="gray">Likes</span>
                            </div>
                        </div>
                        <div className="interaction">
                            <div>
                                <span className="gray">
                                    <Icon type="message" />
                                </span>
                            </div>
                            <div>
                                <span className="bold">
                                    {nFormatter(media.media.commentsCount) || '0'}
                                </span>
                                <br />
                                <span className="gray">Comments</span>
                            </div>
                        </div>
                    </div>
                    <div className="post-description">{media.media.caption}</div>
                    <div style={{ fontSize: '16px', fontWeight: 600 }}>Mentions: </div>
                    <div className="post-tags">
                        {getMentions(media.media.caption).map((tag) => (
                            <Tag
                                color={getColor()}
                                className="pointer"
                                onClick={() =>
                                    window.open(`https://instagram.com/${tag}`, '_blank')
                                }
                            >
                                {`@${tag}`}
                            </Tag>
                        ))}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 600 }}>Tags: </div>
                    <div className="post-tags">
                        {getTags(media.media.caption).map((tag) => (
                            <Tag
                                className="pointer"
                                color={getColor()}
                                onClick={() =>
                                    window.open(
                                        `https://www.instagram.com/explore/tags/${tag.substring(
                                            1
                                        )}`,
                                        '_blank'
                                    )
                                }
                            >
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default PostModal;
