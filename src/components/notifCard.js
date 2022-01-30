const NotifCard = (props) => {
  const date = new Date(props.notification.date.Time);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let source;

  switch (props.notification.source) {
    case "education":
      source = "Ministry of Education";
      break;
    case "health":
      source = "Ministry of Health";
      break;
    case "culture":
      source = "Ministry of Home and Cultural Affairs";
      break;
    default:
      source = props.notification.source;
  }

  const truncateContent = (str) => {
    if (str.length > 350) {
      return str.slice(0, 350) + "...";
    }
    return str;
  };

  const content = truncateContent(props.notification.content);

  return (
    <div className="border-t px-2 md:px-5 lg:px-10 h-72 md:h-56 lg:h-52 flex flex-col justify-between">
      <div>
        <div className="md:grid md:grid-cols-12 mt-4 md:gap-10">
          <h3 className="text-xl md:text-xl lg:text-2xl font-semibold md:col-span-8 lg:col-span-9">
            <a href={props.notification.link}>{props.notification.title}</a>
          </h3>
          <div className="md:col-span-4 lg:col-span-3 text-center">
            <p className="bg-yellow-200 border-2 px-4 rounded-xl text-sm mt-4 md:mt-0 lg:text-base">
              {source}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm md:text-base">{content}</p>
      </div>
      <div className="flex justify-between my-4 gap-10">
        <a href={props.notification.link} className="object-right">
          <button className="border-2 px-2 rounded-lg bg-gray-50">
            Go to source ...
          </button>
        </a>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NotifCard;
