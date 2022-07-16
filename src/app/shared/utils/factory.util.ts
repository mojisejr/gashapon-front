export interface BoxData {
  name: string;
  symbol: string;
  owner: string;
  contract: string;
  isApproved: boolean;
  isBanned: boolean;
}

export function boxDataTransform(
  boxes: [[string, string, string, string, boolean, boolean]]
) {
  return boxes.map((box) => {
    return {
      name: box[0],
      symbol: box[1],
      owner: box[2],
      contract: box[3],
      isBanned: box[4],
      isApproved: box[5],
    };
  }) as BoxData[];
}
