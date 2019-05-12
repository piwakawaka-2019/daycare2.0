import request from "superagent";

const DayCareUrl =
  'http://catalogue.data.govt.nz/api/3/action/datastore_search_sql?sql=SELECT * FROM"26f44973-b06d-479d-b697-8d7943c97c57"';

export function getInfo() {
  return request.get(DayCareUrl).then(res => res.body);
}

export function append(data) {
  return request
    .post(DayCareUrl)
    .send(DayCareInfo)
    .then(res => res.body);
}


const DatabaseUrl = 'http://localhost:3000/v1/parents'

export function getEccList (callback) {
  request.get(DatabaseUrl)
      .end((err,res) => {
          callback(err, res.body)
      })
}