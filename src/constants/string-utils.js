export function getFormatedDate(date){
  if( date === undefined || date === ""){
    date = "";
    return date;
  }
  else{
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dd = date.getDate();

  if (dd < 10) {
    dd = '0' + dd;
    }
    if (month < 10) {
      month = '0' + month;
    }
    date = dd +'/' + month + '/'+ year;
    return date;
  }
};