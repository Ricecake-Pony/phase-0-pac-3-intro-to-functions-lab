function shout(string) {
    return "Hello".toUpperCase();
  }

  function whisper(string) {
    return "Hello".toLowerCase();
  }
  function logShout(string) {
    console.log("HELLO".toUpperCase());
  }

  function logWhisper(string) {
    console.log("Hello".toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
 return  "I can't hear you!";
  }

  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }

  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
 
    //console.log( "YES INDEED!".toUpperCase());
    //console.log("Let's have dinner together!" === "I would love to!");
}
