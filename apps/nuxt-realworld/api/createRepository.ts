import { Context } from '@nuxt/types';

import { ErrorType } from '@/constants';

export type Repository = {
  article: ArticleRepository;
  comment: CommentRepository;
  profile: ProfileRepository;
  tag: TagRepository;
  user: UserRepository;
};
