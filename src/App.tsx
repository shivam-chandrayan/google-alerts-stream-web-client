import "./App.css";
import EntryCard from "./components/EntryCard";
import Sidebar from "./components/Sidebar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const entries = [
  {
    title:
      "Saline Announces Annual Green Thumb Award Winners - The Sun Times News",
    content:
      "... <b>gardens</b>, as well as those who provide habitat for pollinators and other wildlife and who incorporate other sustainable <b>gardening</b> methods, such as&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://thesuntimesnews.com/saline-announces-annual-green-thumb-award-winners/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw14lD67vBswFILIHnxUAaqm",
    publisher: "thesuntimesnews.com",
    published_at: "2024-12-13T16:55:52",
    updated_at: "2024-12-13T16:55:52",
    id: "16f7c2f7-101c-4edc-a965-2ccfecb771e9",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "<b>GARDENING</b> FROM A TO Z: Christmas plants to brighten the holidays! - Montrose Daily Press",
    content:
      "Don't you love all the great festive holiday plants in stores, offices, homes, and almost every creative place that you can think of?",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.montrosepress.com/news/outdoors/gardening-from-a-to-z-christmas-plants-to-brighten-the-holidays/article_3dc6ad48-b8a7-11ef-b0a0-7fd666e49a60.html&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw2n6mKdgBL_ktZ32yqocfXN",
    publisher: "montrosepress.com",
    published_at: "2024-12-13T16:36:27",
    updated_at: "2024-12-13T16:36:27",
    id: "ec0ea8b9-0bfd-46b3-b3ea-0acd03118f69",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Here Are 5 Great Christmas Gifts For The <b>Gardener</b> In Your Life",
    content:
      "<b>Gardening</b> gifts are the perfect way to surprise the green thumb in your life this Christmas! Whether they're planting veggies, cultivating flowers&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.aol.com/5-great-christmas-gifts-gardener-155440682.html&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1fwBwa0DQB4kMOiKiAnsGL",
    publisher: "aol.com",
    published_at: "2024-12-13T16:21:16",
    updated_at: "2024-12-13T16:21:16",
    id: "f99380e1-d221-46d2-b214-1a41e7bd8ce8",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Anglesey: Ysgol Henblas grows own vegetables for canteen | North Wales Chronicle",
    content:
      "A primary school in Anglesey has launched a <b>gardening</b> club to grow vegetables for its canteen menu.",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.northwaleschronicle.co.uk/news/24788620.anglesey-ysgol-henblas-grows-vegetables-canteen/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1QKn-h4BUbN0yd8wsAVLDm",
    publisher: "co.uk",
    published_at: "2024-12-13T16:07:43",
    updated_at: "2024-12-13T16:07:43",
    id: "6bd3c49e-ac49-41f9-b7df-c5a57fad9712",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "<b>Gardeners</b> urged to put vegetable oil on plants in December | Express.co.uk",
    content:
      "<b>Gardeners</b> are being urged to put vegetable oil on plants around their garden this December. While December may be a quieter month in the garden,&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.express.co.uk/life-style/garden/1988462/gardeners-vegetable-oil-plants-December&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw0mXgkUrfYR0NmTvy1HI2VY",
    publisher: "co.uk",
    published_at: "2024-12-13T16:06:16",
    updated_at: "2024-12-13T16:06:16",
    id: "42514b28-cfc6-4e2f-a269-6b57ad461930",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Barrow school pupils make Christmas wreaths from award-winning <b>gardens</b> | The Mail",
    content:
      "Head <b>Gardener</b> Louise Postlethwaite attended the awards ceremony at Kendal Town Hall with pupils and was credited for the school's continued success&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.nwemail.co.uk/news/24789982.barrow-school-pupils-make-christmas-wreaths-award-winning-gardens/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1g6Odq0F-Qxirlye5qRw_E",
    publisher: "co.uk",
    published_at: "2024-12-13T16:03:45",
    updated_at: "2024-12-13T16:03:45",
    id: "1eaffb2b-62db-4a70-aba6-907d792aa4a7",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title: "<b>Gardening</b> weekly with Lynne Allbutt - Abergavenny Chronicle",
    content:
      "Asking me to pick my favourite <b>gardening</b> tool is hard, but if pushed it would probably be my Okatsune secateurs. They are small, (mine are No.101's),&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.abergavennychronicle.com/opinion/gardening-weekly-with-lynne-allbutt-746383&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw3WOYVSbq8qwHxruxNl4ti4",
    publisher: "abergavennychronicle.com",
    published_at: "2024-12-13T16:02:02",
    updated_at: "2024-12-13T16:02:02",
    id: "72eeba73-7442-4f5b-99d9-fc8f237d3f53",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "<b>Gardening</b>: Christmas gift ideas for <b>gardeners</b> - Gareth Carter - NZ Herald",
    content:
      "Gareth Carter is the general manager of Springvale Garden Centre in Whanganui. OPINION We are now right in the middle of the “silly season”,&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.nzherald.co.nz/whanganui-chronicle/lifestyle/gardening-christmas-gift-ideas-for-gardeners-gareth-carter/BALZJEKY3ZE2FO4K3LMGU4YBQY/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw2zNtokZQiJe2CFMIldSC9z",
    publisher: "co.nz",
    published_at: "2024-12-13T16:00:20",
    updated_at: "2024-12-13T16:00:20",
    id: "6c3b81c6-e5e9-4c2a-9cf2-e5f3b1b30749",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Allied <b>Gardens</b> man, now dead, was the one who put his wife in the freezer years ago: SDPD",
    content:
      "Nearly a year after an elderly woman was found dead in a freezer in Allied <b>Gardens</b> — having last been seen nine years earlier — San Diego police&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.nbcsandiego.com/news/local/allied-gardens-man-now-dead-was-the-one-who-put-his-wife-in-the-freezer-years-ago-sdpd/3699787/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw2wUgmJqxgMTI1NKkRK6O6i",
    publisher: "nbcsandiego.com",
    published_at: "2024-12-13T15:59:37",
    updated_at: "2024-12-13T15:59:37",
    id: "87983dda-58dd-406b-9f4e-5533dfcd8630",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Brian Minter: 12 of the best gifts for the <b>gardeners</b> on your list | Vancouver Sun",
    content:
      "If your <b>gardener</b> is blessed with culinary skills, Proven Winners have introduced a rose with edible blooms that just might be a hit. Flavorette Pear'd&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://vancouversun.com/life/brian-minter-12-best-gifts-gardeners&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw0kyB0_M1G-8RgYJckGBgHU",
    publisher: "vancouversun.com",
    published_at: "2024-12-13T15:36:54",
    updated_at: "2024-12-13T15:36:54",
    id: "df49e291-a94c-4d61-b694-dfdebb23e96f",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Poundbury <b>Gardens</b> achieves third place in national competition - KeeP 106",
    content:
      "Second prize was won by Brimsmore <b>Gardens</b> in Yeovil, whilst coming first in the Garden Centre category was Castle <b>Gardens</b> in Sherborne being top for&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://keep106.com/2024/12/13/poundbury-gardens-achieves-third-place-in-national-competition/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1ChVwUKw5T1BAZ4A62L47w",
    publisher: "keep106.com",
    published_at: "2024-12-13T15:18:07",
    updated_at: "2024-12-13T15:18:07",
    id: "191d0ad5-fe41-4727-bb8b-3cfea6340bcf",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "<b>Gardening</b>: Start gathering seeds and mulch - Main Street Media of Tennessee",
    content:
      "... we can do to prepare our garden for 2025 though. A lot of the <b>gardening</b> tasks will take place in our.",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://mainstreetmediatn.com/articles/cheathamcountyexchange/gardening-start-gathering-seeds-and-mulch/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1kgp_p3qCay_jCkX7Uz8PP",
    publisher: "mainstreetmediatn.com",
    published_at: "2024-12-13T15:02:56",
    updated_at: "2024-12-13T15:02:56",
    id: "0d0f4b52-703d-4e6b-bd6c-bbf2be0014e8",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Brits warned not to compost one common item to avoid garden disaster - Daily Express",
    content:
      "By making informed choices, <b>gardeners</b> ensured they could continue to enjoy sustainable <b>gardening</b> without compromising their soil's integrity. Up&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.express.co.uk/life-style/garden/1988373/gardeners-warning-not-compost-teabags-ruin-soil&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw2DelVpariPZGoaRHYLsKZz",
    publisher: "co.uk",
    published_at: "2024-12-13T14:48:42",
    updated_at: "2024-12-13T14:48:42",
    id: "7e0fe5ee-185b-418a-bb25-c5f59d0fefc1",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Miller's Eagle Scout project brings <b>gardening</b> opportunities to Wel-Life - Storm Lake Times",
    content:
      "Miller designed his raised planters to address the needs of seniors at the local senior living center for residents who still enjoy <b>gardening</b> but face&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=http://www.stormlake.com/stories/millers-eagle-scout-project-brings-gardening-opportunities-to-wel-life,120083&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw3ANzjDwpuVoHRBgGYVPZPc",
    publisher: "stormlake.com",
    published_at: "2024-12-13T14:45:01",
    updated_at: "2024-12-13T14:45:01",
    id: "217c993c-749d-47b8-b772-776013fdaefa",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "2024 Franklin County Master <b>Gardener</b> Recognition Banquet - Morning Ag Clips",
    content:
      "In the past year, the Penn State Extension Franklin County Master <b>Gardeners</b> have volunteered 5961 hours of their time.",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.morningagclips.com/2024-franklin-county-master-gardener-recognition-banquet/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw2R6pB84Z8PostJ0m9m08UG",
    publisher: "morningagclips.com",
    published_at: "2024-12-13T13:30:17",
    updated_at: "2024-12-13T13:30:17",
    id: "37ac0831-633b-488b-92e8-ecfb7b4887fa",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title: "Weekend <b>Gardener</b>: Quick Christmas decor ideas - KBTX",
    content: "Weekend <b>Gardener</b>:&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.kbtx.com/2024/12/13/weekend-gardener-quick-christmas-decor-ideas/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw3zErVPQ4_5byaTbBVR8Xb3",
    publisher: "kbtx.com",
    published_at: "2024-12-13T13:27:19",
    updated_at: "2024-12-13T13:27:19",
    id: "14ea049e-9b85-46fb-aa81-83b27e3223c6",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "<b>Gardener</b> highlights concerning phenomenon at local nurseries: 'Ridiculous and almost a crime'",
    content:
      "One Redditor was frustrated with the difficulty of finding local native plants — especially when many shops readily sell invasive species.",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.thecooldown.com/green-business/local-garden-centers-native-plants-reddit/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw070YNzcucOTwc-1ENtc-Ah",
    publisher: "thecooldown.com",
    published_at: "2024-12-13T12:34:28",
    updated_at: "2024-12-13T12:34:28",
    id: "4080e52d-a6f1-44f5-ac2f-096e77772cdd",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Racecard | 17:00 Race 7 - Nad Al Sheba <b>Gardens</b> Stakes | Meydan (UAE) - Sky Sports",
    content:
      "Race 7 - Nad Al Sheba <b>Gardens</b> Stakes. 8 Runners; Distance: 7f; Going: Fast; Surface: Dirt; AED 189,999 added; Winner: AED 114,000; 2nd: AED 38,002&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.skysports.com/racing/racecards/meydan/13-12-2024/1278700/race-7-nad-al-sheba-gardens-stakes&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw1npyi9uHmPK0d8nsdXrT9s",
    publisher: "skysports.com",
    published_at: "2024-12-13T12:05:26",
    updated_at: "2024-12-13T12:05:26",
    id: "215005a1-a928-481a-bb2f-39465f0d98b9",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Monty Don Shares Urgent Task For <b>Gardeners</b> As Temperatures Drop",
    content:
      "Monty Don has urged <b>gardeners</b> to tackle one job in particular before the wintery weather takes hold – washing brick and stone paths.",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://www.countryliving.com/uk/homes-interiors/gardens/a63167491/monty-don-wash-garden-paths-winter/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw0C4Y-cfbJVAH39X27yJAdN",
    publisher: "countryliving.com",
    published_at: "2024-12-13T11:10:19",
    updated_at: "2024-12-13T11:10:19",
    id: "798ca8d9-561b-4a43-9ef7-1cf4c7967a1f",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
  {
    title:
      "Toy giveaway, concert hosted at Nickerson <b>Gardens</b> with artists such as Kendrick Lamar, SZA - ABC7",
    content:
      "&quot;People used to run from here (Nickerson <b>Gardens</b>),&quot; Tiffith said. &quot;They didn't want to come here. I made that change. The community - no problems, no&nbsp;...",
    link: "https://www.google.com/url?rct=j&sa=t&url=https://abc7.com/post/top-dawg-entertainment-hosts-toy-giveaway-concert-nickerson-gardens-artists-kendrick-lamar-sza/15649376/&ct=ga&cd=CAIyHDVkYzg1NThkODMxNjU0N2M6Y28uaW46ZW46SU4&usg=AOvVaw15DXrje5GdenT4r33MwL_Y",
    publisher: "abc7.com",
    published_at: "2024-12-13T11:08:56",
    updated_at: "2024-12-13T11:08:56",
    id: "e02abf4e-1e30-44a4-ac15-4eabeee9420a",
    feed_id: "b24aa1af-31a7-4b38-beda-ae07cefca418",
    created_at: "2024-12-13T17:12:35",
  },
];

function App() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex justify-end">
        <Sidebar />
      </div>

      <div className="feed col-span-2">
        <div className="pagination-container sticky top-0 bg-gray-100">
          <div className="flex justify-end items-center gap-2 h-16">
            <div>0-50 of 2,3198</div>
            <button
              aria-label="bookmark"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <NavigateBeforeIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              aria-label="bookmark"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <NavigateNextIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          {entries.map((entry) => (
            <EntryCard entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
