
export function formatDT(dateTime) {
    const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
        hour:"2-digit",
        minute:"2-digit",
        day:"2-digit",
        month:"short",
        year:"2-digit"
      });

    return dateTimeFormat.format(dateTime);
};

export function blobToBase64(blob) {


    return "";
}