import React from 'react';
import Post from './Post';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <div className="posts">
        <Post
          
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
          author="Sarthak Kamra"
          authorImage="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdzbtHS0xYM~P0lnGXpvz7rWZsn~wFLjyulnJCsrLf2YouuGcwi16VPWtbvk2bW5V10lUNmrhAK3ckdX2yogkX2mIJYrbCGBT3C95DSjGpu7QfNaiGVLbwuLUWhtY13IRt6zNINlp17F2cTFg8dIXU~R4Yfymey31l3MH6aZwCSrEyPkib~DxvtgDi~TT2401unRBGqb-oKj7LPphwB0zTKMYXjyBdbWm~p8QzezKMyAJmseD1SpVYUmYA2ILY1Gk~ibNfObZTJOVb5lWZEdhu7YU7kgCkYMOHdFJAjBtMsVBqdvOXrTFfG1nxMEmZcQnPwICIHNK3V4heO0VlwVvA__"
          description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          views="1.4k views"
          authorName="Siddarth Goyal"
          emoji="✍️"
          uppertitle="Article"
          image="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AI96XbEM9G2nQUo-8USJmmBj2pUlj8V3sWG3YrYi3s3BGjFiUVMJ6cGqqkcZwxAZRfcXsOPTCv4yEHY84irTbgZiUK7G06xelQncLxvF-YGFKSvs-Fz5wqku9jXDrmJk5aMXI3DBRdCGZIqGXgpcvoR~lFlu1e8h-KTIGKPTrDVs0MVXGoobchz6NW7NLDOv5q68kCMZ5mgAKrzXXD3mS8uGepF0RVQwHcirt1KKSAi49GjtN9kT08h~D43-adfTpTqRU1eb22nevEDPdMpw2axYRAJGq4k-76egS5z06m6ogRtMwfUhz8CO5XqWGunnLuAVjqz8WNQ4hDDNWt2UGA__"
        />
        <Post
          type="Education"
          title="Tax Benefits for Investment under National Pension Scheme launched by Government"
          authorName="Sarah West"
          authorImage="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNrZ57HOk5k5afFH2GLMkx3Y-i4lIVa2qudb5l7R9lUM~~ms2WJewGyzVt2TbRBYsroxwT~u7uJSKGi1GjBta54wnU9HxQHWZCVzTfzEvG9FcXeOChLzAv1Uoq7gCudmHjz8K7IigjPjlxMDrXdTRjg-9clTAAWmQk5ZchFjyX2udFcb65ELWBbO8zqvtnAOn4d7W7n5CPyTpNmQ3nbxzm1Y7G9YYNinAntUyUVOHvH6lZJ60wCkcmfaI0Q5vwNstfUXVHOwznKV3F1vHXlqSFnc7xONHHQ5e4nUERxoXNRbu--C~2REH78ShgdF9JOiY6a6t4lv~j9X16cL9sxNVQ__"
          views="1.4k views"
          emoji="🔬"
          uppertitle="Education"
          image="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W83tmxj4TJMo5r3JLp~ew1JFxM2wpaKvXttG2MfutexxDtnGWkUKrconwFWLnUYAYv8hO5zqghbowoJVXfm9AX3qGUTt6eoz3Ah2ppvzOvmliCoE0K2QLeLU0Z0H3urtMuIBaQkdqIHVS8Eltca409~pzwjZVTn1PeFM-O8efwljfMHqdopjW3-Ixuj-aXYkjqAxjZDRWPTJXuFkttnGSx9WXxdpPcdDy8tGVkWFVK1k2Ty9~-u6HNb-pqYRIcUf7ToCX-4cDlg1IXZqTN3IOqU5EzS9p4wbTijg-8OILeI52oiCJ7C0RRAg1deWik6OJ3rwyFJzdt9jl2FSraqSNw__"
        />
        <Post
          uppertitle="Meetup"
          title="Finance & Investment Elite Social Mixer @Lujiazui"
          authorName="Ronal Jones"
          views="1.4k views"
          authorImage="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ng0VDYcSvtV1A57wBDN4-DuJAwroU49mCLRKwrWstF5SsOhJBYqwqikGVs7TS5nVFvmFXiCmc3eLB2NpVjWbKKY5i8pkNpxPOGWHjMGwPVNAGg8EncxQ9E6xafnTbpe7xp~jBa~0X8DGMC5DGFizAWLCgm-6TGLWS3iBV1iL8pD~n09gAiKOCNmggoWRL0KqCuY4pQcEk6aKAw6GVA1NhzKrsB2yGHX7T-KzHeQE-M71KEgHzIcjRTjo8uHytniC-UXKoIiA5isBV0o-H6CZZogHogTqA8948OeoVlOK8rAJ1~iyAwb-fnLX2hYsdqNjVO1c9E1HMPVq2e6cZ~tAWw__"
          location="Ahmedabad, India"
          date="Fri, 12 Oct, 2018"
          buttoncontent="Visit Website"
          buttoncolor="orange"
          button="true"
          emoji="📅"
          image="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll5sqn9YuE-evKrJAgN86lIVC-EGZf8wiAw1nq7yAryNBOkq7Sg8hKImeS7LeiCBxcRUy0JhqQVzNiHagbk~JVvkW8BSoPvEKIaXZD0RCE7cbbNavBBaU~zfmUvq9agcyHvtxph9jVXyYGeWEfxfe-pVLgnhNz6y02jHe6UgdYcm0VzxdXGkGplvS8Q9OZwlKDbB17ne1wSNg5pyhKsAm~ZfhTmr-5OF7HRmREr65XszlCPeXxVakc8JXakxmmWYL-WGsoYL1xkk-A2s28bQDdMYKgwR7oqJspBh8NEk44VA-KgryX1i6VNjUgKrqQ23G6Frx6FBiXjuVCSVpfhQng__"
        />
        <Post
       
          uppertitle="Job"
          emoji="💼"
          authorImage="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjKCnjPcFg1HH~hdRR11kTiMj~Kjl6MTH3a2ErcsPp5tYPnlGWTTg251zbytSxPVYTC9SintIDgXfp8R4dmYoj5-bgsUjWUbSBrZg73DbJcV21ja5yZf5KIvDdeMgzhmAJrW4JhZydkUisP71LXPqux7JaSWCKkL-8Dl3PO6wcWloi5q8JPLP7B58P1zMBLXDG6YPsI9DKNqt3wvX~u~TBQSZohBijFJEbf8WTz~cA-aN1voGw~Bu6CTCGzmRe~btlT8xxAII-9BLDxf1Is7zthfUplTj26r4XfmMeAINFd-PybfNQybCBJ69WuPZ3Oeop7lRSc9L5kfcM8Txp-9ww__"
          
          authorName="Joseph Gray"
          views="1.4k views"
          suitcase="Innovaccer Analytics Private Ltd."
          location="Noida, India"
          button="true"
          buttoncolor="green"
          buttoncontent="Apply on Timesjobs"
          buttonText="Apply on TimesJobs"
        />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
