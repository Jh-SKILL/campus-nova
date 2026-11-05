/* 异步 API 桩：仅操作本地模拟数据，保持未来接口的调用形状 */
(function () {
  const delay = (ms = 320) => new Promise(resolve => setTimeout(resolve, ms));
  async function respond(callback, ms) {
    await delay(ms);
    return callback();
  }

  window.NovaAPI = {
    // TODO: replace with GET /api/v1/places → { places }
    fetchPlaces() {
      return respond(() => window.NovaDB.places);
    },

    // TODO: replace with GET /api/v1/places/:placeId → { place }
    fetchPlace(placeId) {
      return respond(() => {
        const place = window.NovaStore.getPlace(placeId);
        if (!place) throw new Error("没有找到这个校园地点");
        return place;
      });
    },

    // TODO: replace with GET /api/v1/groups?placeId= → { groups }
    fetchGroups(placeId) {
      return respond(() => window.NovaStore.getGroups(placeId));
    },

    // TODO: replace with POST /api/v1/groups/:groupId/join → { group }
    joinGroup(groupId) {
      return respond(() => window.NovaStore.joinGroup(groupId), 420);
    },

    // TODO: replace with DELETE /api/v1/groups/:groupId/join → { group }
    leaveGroup(groupId) {
      return respond(() => window.NovaStore.leaveGroup(groupId), 360);
    },

    // TODO: replace with POST /api/v1/groups → { group }
    createGroup(payload) {
      return respond(() => window.NovaStore.createGroup(payload), 520);
    },

    // TODO: replace with POST /api/v1/places/:placeId/checkins → { result }
    checkIn(placeId) {
      return respond(() => {
        if (!window.NovaStore.getPlace(placeId)) throw new Error("打卡地点不存在");
        return window.NovaStore.checkIn(placeId);
      }, 480);
    },

    // TODO: replace with GET /api/v1/clubs?query=&category= → { clubs }
    fetchClubs({ query = "", category = "all" } = {}) {
      return respond(() => {
        const keyword = query.trim().toLowerCase();
        return window.NovaDB.clubs.filter(club => {
          const categoryMatch = category === "all" || club.category === category;
          const text = `${club.name}${club.slogan}${club.description}${club.category}`.toLowerCase();
          return categoryMatch && (!keyword || text.includes(keyword));
        });
      });
    },

    // TODO: replace with GET /api/v1/clubs/:clubId → { club }
    fetchClub(clubId) {
      return respond(() => {
        const club = window.NovaDB.clubs.find(item => item.id === clubId);
        if (!club) throw new Error("没有找到这个社团");
        return club;
      });
    },

    // TODO: replace with POST /api/v1/clubs/:clubId/applications → { application }
    applyClub(payload) {
      return respond(() => window.NovaStore.applyClub(payload), 520);
    },

    // TODO: replace with GET /api/v1/forum/posts?category=&query=&sort= → { posts }
    fetchForumPosts({ category = "all", query = "", sort = "latest" } = {}) {
      return respond(() => {
        const keyword = query.trim().toLowerCase();
        const posts = window.NovaStore.getForumPosts().filter(post => {
          const categoryMatch = category === "all" || post.category === category;
          const text = `${post.title}${post.body}${post.author}`.toLowerCase();
          return categoryMatch && (!keyword || text.includes(keyword));
        });
        if (sort === "hot") {
          posts.sort((a, b) => (b.likes * 2 + b.commentCount * 3) - (a.likes * 2 + a.commentCount * 3));
        }
        return posts;
      });
    },

    // TODO: replace with GET /api/v1/forum/posts/:postId → { post }
    fetchForumPost(postId) {
      return respond(() => {
        const post = window.NovaStore.getForumPost(postId);
        if (!post) throw new Error("这个话题不存在或已被删除");
        return post;
      });
    },

    // TODO: replace with POST /api/v1/forum/posts → { post }
    createForumPost(payload) {
      return respond(() => window.NovaStore.createForumPost(payload), 420);
    },

    // TODO: replace with POST /api/v1/forum/posts/:postId/like → { liked, likes }
    toggleForumLike(postId) {
      return respond(() => window.NovaStore.toggleForumLike(postId), 220);
    },

    // TODO: replace with POST /api/v1/forum/posts/:postId/comments → { post }
    addForumComment(postId, payload) {
      return respond(() => window.NovaStore.addForumComment(postId, payload), 360);
    },

    // TODO: replace with DELETE /api/v1/forum/posts/:postId
    deleteForumPost(postId) {
      return respond(() => window.NovaStore.deleteForumPost(postId), 300);
    },

    // TODO: replace with GET /api/v1/me → { user, stats, badges, checkins, applications }
    fetchProfile() {
      return respond(() => ({
        user: window.NovaDB.user,
        stats: window.NovaStore.getStats(),
        checkins: window.NovaStore.state.checkins,
        applications: window.NovaStore.state.applications,
        badges: window.NovaDB.badges.map(badge => ({
          ...badge,
          progress: Math.min(window.NovaStore.getBadgeCount(badge.type), badge.target),
          unlocked: window.NovaStore.getBadgeCount(badge.type) >= badge.target
        }))
      }));
    }
  };
})();
