export const getIconId = (name, justIdAlone=false) => {
    let id;
    switch (name) {
      case "TV":
        id = "tv";
        break;
      case "Broadband":
      case "Fibre Broadband":
        id = justIdAlone ? "broadband" :"wifi";
        break;
      case "Mobile":
        id = "mobile";
        break;
      default:
        id='NA';
        break;
    }
    return justIdAlone ? id : `#icon-${id}`;
}