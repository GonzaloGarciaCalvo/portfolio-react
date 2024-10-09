export default function SkillItem({itemData, image}) {

  return (
		<article className={itemData.article.className}>
			<img 
        className={itemData.image.className} 
        src={image} 
        alt={itemData.image.alt} />
			<h4 className={itemData.h4.className}>{itemData.h4.text}</h4>
		</article>
	);
}