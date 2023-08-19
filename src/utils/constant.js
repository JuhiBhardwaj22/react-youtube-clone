const YOUTUBE_API_AUTH_KEY = "";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_AUTH_KEY;

export const YOUTUBE_SEARCH_VIDEO_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_AUTH_KEY}&id=`;

export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${YOUTUBE_API_AUTH_KEY}&relatedToVideoId=`;

export const OFFSET_LIVE_CHAT = 200;
export const COMMENT_DATA = [
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [
          {
            name: "Juhi Bhardwaj",
            text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
            replies: [
              {
                name: "Juhi Bhardwaj",
                text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
                replies: [
                  {
                    name: "Juhi Bhardwaj",
                    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
                    replies: [
                      {
                        name: "Juhi Bhardwaj",
                        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [],
      },
    ],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [],
      },
    ],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [],
      },
    ],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [],
      },
    ],
  },
  {
    name: "Juhi Bhardwaj",
    text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
    replies: [
      {
        name: "Juhi Bhardwaj",
        text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
        replies: [
          {
            name: "Juhi Bhardwaj",
            text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
            replies: [
              {
                name: "Juhi Bhardwaj",
                text: "Your time is limited, so dont waste it living someone elses life - by Juhi Bhardwaj.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
