export const pingEpic = action$ =>
  action$
    .ofType("PING")
    .delay(3000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: "PONG" });
