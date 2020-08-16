// accountInfo
// chartInfo
// playerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Jorge",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "jorginhodev",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Jorge",
  nickname: "jorginhodev",
  level: 100,
};
