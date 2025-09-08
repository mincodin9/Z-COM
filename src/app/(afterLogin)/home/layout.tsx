export default async function Layout({children}) : Promise<Element>{
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
