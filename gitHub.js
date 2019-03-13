class GitHub {
    constructor() {
        this.client_id = 'e2d205325afb995c2a3b';
        this.client_secret = 'cb2a9d6705e2277e87473a55491eec7cc5f48d13';
    }

    async getUser(user, repos) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}