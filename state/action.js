export const STORE_THREAT_DATA = 'STORE_THREAT_DATA';

export function storeThreatData(data) {
    return {
        type: STORE_THREAT_DATA,
        payload: data
    }
}
