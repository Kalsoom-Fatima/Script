const crypto = require('crypto');

async function findPrefix(string) {
    let prefix = 0;
    while (true) {
        // Calculate the SHA-256 hash of the prefix + string
        const hash = crypto.createHash('sha256').update(prefix + string).digest('hex');
        // Check if the hash starts with three consecutive zeros
        if (hash.substring(0, 3) === '000') {
            return prefix;
        }
        prefix++;
    }
}

(async () => {
    const string = 'SYSTEMS-LIMITED-PAKISTAN';
    const prefix = await findPrefix(string);
    console.log(`Prefix Found",prefix);
})();
