import { PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe(".findMany", () => {
    const posts = [
      { text: "Post 1" },
      { text: "Post 2" },
      { text: "Post 3" },
      { text: "Post 4" },
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it("should return all posts if called without options", () => {
      // реализуйте тест-кейс
      const foundPosts = postsService.findMany();
      expect(foundPosts.length).toEqual(posts.length);
    });

    it("should return correct posts for skip and limit options", () => {
      // реализуйте тест-кейс
      const mockLimit = 1;
      const mockSkip = 1;
      const foundPost = postsService.findMany({
        skip: mockSkip,
        limit: mockLimit,
      });
      expect(foundPost.length).toEqual(1);
    });

    // реализуйте недостающие тест-кейсы

    it("should return correct posts for skip options", () => {
      const testSkip = 2;
      let foundPosts = postsService.findMany({ skip: testSkip });
      expect(foundPosts.length).toEqual(posts.length - testSkip);
    });

    it("should return correct posts for limit option", () => {
      const testLimit = 1;
      const foundPosts = postsService.findMany({ limit: testLimit });
      expect(foundPosts).toHaveLength(testLimit);
    });
  });
});
