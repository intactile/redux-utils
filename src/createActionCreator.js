export default function createActionCreator(type) {
  return payload => ({
    type,
    payload
  });
}
