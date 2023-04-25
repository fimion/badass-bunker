import { defineCollection, z } from 'astro:content';


const ZodColor = z.custom<`#${hexNumber}`>((val)=>{
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val as string);
})
export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	homebrew: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			creatorName: z.string(),
			creatorUrl: z.string().url().nullable(),
			resourceUrl: z.string().url(),
			img: z.string().url().nullable(),
			img_alt: z.string().nullable(),
			color1: ZodColor.nullable(),
			color2: ZodColor.nullable(),
		})
	})
};
