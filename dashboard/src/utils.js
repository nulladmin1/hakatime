import _ from "lodash";

export default {
  getDaysBetween: function(start, end) {
    let arr;
    let dt;

    for (arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  },
  // TODO: This will have to be implemented on the server.
  addTimeOffset: function(v) {
    const n = parseInt(v);
    const offSet = new Date().getTimezoneOffset() / 60;

    return ((n - offSet) % 23).toString();
  },
  secondsToHms: function(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "";

    return hDisplay + mDisplay;
  },

  getTotalCodingTime: function(obj) {
    if (!obj) return 0;

    return obj.totalSeconds;
  },
  getTotalProjects: function(obj) {
    if (!obj) return 0;

    return obj.projects.length;
  },
  getMostActiveProject: function(obj) {
    if (!obj) return "-";

    const res = _.orderBy(obj.projects, ["totalSeconds"], ["desc"])[0];
    if (res) return res.name;
    else return "-";
  },
  getMostActiveLanguage: function(obj) {
    if (!obj) return "-";

    const res = _.orderBy(obj.languages, ["totalSeconds"], ["desc"])[0];
    if (res) return res.name;
    else return "-";
  }
};
