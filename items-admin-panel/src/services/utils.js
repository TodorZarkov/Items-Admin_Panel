
export function formatDateTime(dateTime) {
    const opt = {
        hour:"2-digit",
        minute:"2-digit",
        day:"2-digit",
        month:"short",
        year:"2-digit"
      };

    const result = dateTime
        .toLocaleString('en-GB', opt)
        .replace(',', '')
        .split(" "); //"0:00 01 Jan `01";
    
    result.unshift(result.pop());
    result[3] = `\`${result[3]}`
    return result.join(" ");
};

export async function blobToBase64(blob) {
   const reader = new FileReader();
   await new Promise((resolve, reject) => {
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsDataURL(blob);
   });

    return reader.result.replace(/^data:.+;base64,/, '');
}