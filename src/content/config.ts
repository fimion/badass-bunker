import { defineCollection, z } from 'astro:content';


const ZodColor = z.custom<`#${hexNumber}`>((val)=>{
	if(!val) return true;
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
			creatorUrl: z.union([z.literal("pass"), z.string().url().optional()]),
			resourceUrl: z.string().url(),
			img: z.union([z.literal("pass"), z.string().url().optional()]),
			img_alt: z.string().or(z.literal("pass")),
			color1: ZodColor,
			color2: ZodColor,
		})
	})
};
