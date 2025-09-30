import { useEffect, useState } from "react";

export const useModifiedMessageObjects = (details) => {
  const [modifiedMessageDetails, setModifiedMessageDetails] = useState([]);

  useEffect(() => {
    let mockMessageDetails = { array: [], object: {} };

    details.forEach((detail, index) => {
      if (index === 0 || details[index - 1].type !== detail.type) {
        const objectCreated = { status: detail.type, array: [detail] };
        if (index !== 0 && details[index - 1].type !== detail.type) mockMessageDetails.array.push(mockMessageDetails.object);
        mockMessageDetails.object = { ...objectCreated, id: mockMessageDetails.array.length };
      } else {
        mockMessageDetails.object.array.push(detail);
      }

      if (index + 1 === details.length) mockMessageDetails.array.push(mockMessageDetails.object);
    });

    setModifiedMessageDetails(mockMessageDetails.array);
  }, [details]);

  return { array: modifiedMessageDetails };
};
