// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy data when ready to test.

var author = {
  avatarUrl: "http://khaledhosseini.com/wp-content/uploads/2013/01/home-bio-portrait.png",
  name: "Khaled Hosseini"
};

var userBadges = ["Wrote 'Kite Runner'", "Wrote 'A Thousand Splendid Suns'", "Wrote 'And the Mountains Echoed'"];

var today = new Date();

function formatDate(props) {
  return(
    <div>
      
    </div>

  )
}


function UserInfo(props) {
  return (
    <div className="UserInfo">
        <Avatar author={author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <div>
      <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
    </div>
  )
}

function Badges(props) {
  return (
    <div>
      <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  )
}

function CommentBody(props) {
  return (
    <div>
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
      <Badges userBadge={userBadge} />
    </div>
  )
}


function Application(props) {
  return (
    <div>
      <UserInfo author={author} />
      <CommentBody date={today} commentHeading="Author of many best-selling novels" text='Khaled Hosseini is an Afghan-born American novelist and physician. After graduating from college, he worked as a doctor in California, an occupation that he likened to "an arranged marriage”' date={today} />
    </div>
  )
}

ReactDOM.render (
  <Application />,
  document.getElementById('container')
)