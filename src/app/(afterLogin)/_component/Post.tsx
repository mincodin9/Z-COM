import Link from 'next/link';
import style from './post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';
import { Post } from '@/model/Post';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: Post;
}

export default function Page({noImage, post}: Props) {
  const target = post;
  // if(Math.random() > 0.5 && !noImage) {
  //   target.Images.push(
  //     { imageId: 1, link: faker.image.url() },
  //     { imageId: 2, link: faker.image.url() },
  //     { imageId: 3, link: faker.image.url() },
  //     { imageId: 4, link: faker.image.url() }
  //   )
  // }
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const randIntSeed = (seed: number, min: number, max: number) =>
    Math.floor(seededRandom(seed) * (max - min + 1)) + min;
  const seed = post.postId;
  const count = noImage ? 0 : randIntSeed(seed, 0, 4);
  target.Images = Array.from({ length: count }, (_, idx) => ({
    imageId: idx + 1,
    link: `https://picsum.photos/seed/${seed}-${idx + 1}/414/414`,
  }));

  return(
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade}/>
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <PostImages post={target} />
          <ActionButtons/>
        </div>
      </div>
    </PostArticle>
  )
}