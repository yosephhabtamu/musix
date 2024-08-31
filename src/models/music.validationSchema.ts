import { z } from "zod";

export const musicSchema = z.object({
  title: z.string({
    required_error: "Music title is required",
    invalid_type_error: "Music title must be a string",
  }),
  album: z.string({
    required_error: "Music album name is required",
    invalid_type_error: "Music album name must be a string",
  }),
  artist: z.string({
    required_error: "Music artist name is required",
    invalid_type_error: "Music artist name must be a string",
  }),
  genre: z.string({
    required_error: "Music genre is required",
    invalid_type_error: "Music genre must be a string",
  }),
});

export const updateMusicSchema = z.object({
  title: z.string().optional(),
  album: z.string().optional(),
  artist: z.string().optional(),
  genre: z.string().optional(),
});
