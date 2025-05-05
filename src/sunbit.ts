class LikesTracker {
    countByPostId = new Map<number, number>();
    usersByPostId = new Map<number, Map<number, number>>();


    like(postId: number, userId: number) {
        if (!this.usersByPostId[postId]) {
            this.usersByPostId.set(postId, new Map())
        }

        if (!this.usersByPostId[postId][userId]) {
            this.usersByPostId[postId].set(userId, 0);
            this.countByPostId[postId]++;
        }
    }

    unlike(postId: number, userId: number) {
        if (this.usersByPostId[postId] && this.usersByPostId[postId][userId]) {
            this.usersByPostId[postId].remove(userId);
            this.countByPostId[postId]--;
        }
    }

    top(n: number): number[] {
        const maxPosts = new Map<number, number>();

        let max;
        let min = this.countByPostId[0];

        this.countByPostId.forEach(post => {
            const currentCount = this.countByPostId.get(post);
            if (currentCount > max) {
                maxPosts.set(post, currentCount);
                max = this.countByPostId.get(post);
            } else if (currentCount < min && maxPosts.size < n) {
                maxPosts.set(post, currentCount);
                min = currentCount;
            }
        })


        // return maxPosts.keys();
    }
}


function main() {
    const likesTracker = new LikesTracker();
    likesTracker.like(1, 1)
    likesTracker.like(2, 1)
    likesTracker.like(1, 2)
    likesTracker.like(1, 1)
    likesTracker.like(3, 1)
    likesTracker.top(3) // should return 1, 2, 3
    likesTracker.like(1, 1)
    likesTracker.like(2, 3)
    likesTracker.like(2, 4)
    likesTracker.like(3, 1)
    likesTracker.top(2) // should return 2, 1
    likesTracker.like(4, 1)
    likesTracker.unlike(3, 1)
    likesTracker.top(3) // should return 2, 1, 4
}

main();
