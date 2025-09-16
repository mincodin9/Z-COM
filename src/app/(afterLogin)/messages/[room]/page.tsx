import { faker } from "@faker-js/faker"
import style from './chatRoom.module.css';
import Link from "next/link";
import BackButton from "../../_component/BackButton";
import cx from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function ChatRoom() {
  const user = {
    id: 'hero',
    nickname: '영웅',
    image: faker.image.avatar(),
  }
  const Messages = [
    {messageId: 123, id: 'mincodin9', content: '잘 지내세요?', createdAt: new Date()},
    {messageId: 123, id: 'hero', content: '연락주세요!', createdAt: new Date()},
  ]
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div><h2>{user.nickname}</h2></div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div><b>{user.nickname}</b></div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {Messages.map((m) => {
          if (m.id === 'mincodin9') {
            return (
              <div
                key={m.messageId} 
                className={cx(style.message, style.myMessage)}>
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
              </div>
            );
          }
          return (
            <div 
              key={m.messageId} 
              className={cx(style.message, style.yourMessage)}>
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
            </div>
          );
        })}
      </div>
    </main>
  )
}