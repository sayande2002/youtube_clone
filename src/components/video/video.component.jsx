import React, { useEffect, useState } from "react";
import "./video.component.scss";
import moment from "moment/moment";
import request from "../../api";
import numeral from "numeral";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img className="video__image" src={medium.url} alt="" />
        <span className="video__duration">{_duration}</span>
      </div>
      <div className="video__bottom">
        <img className="video__thumbnail" src={channelIcon?.url} alt="" />
        <div className="video__info">
          <p className="video__title">{title}</p>
          <p className="video__channel">{channelTitle}</p>
          <span className="video__views">
            {numeral(views).format("0.a")} •{" "}
          </span>
          <span className="video__time">{moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
