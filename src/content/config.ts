import { defineCollection, z } from 'astro:content';


const ZodColor = z.custom<`#[0-9a-fA-F]`>((val)=>{
	if(!val) return true;
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val as string);
})
export const collections = {
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
	}),
	bmTool: defineCollection({
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
