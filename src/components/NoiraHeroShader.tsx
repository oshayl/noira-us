import {
  Shader,
  Dither,
  FallingLines,
  Glass,
  Pixelate,
  ReflectivePlane,
  SolidColor,
} from 'shaders/react'

export default function NoiraHeroShader() {
  return (
    <Shader className="absolute inset-0 w-full h-full">
      <SolidColor color="#000000" />
      <Glass
        aberration={0}
        cutout={true}
        edgeSoftness={0.2}
        fresnel={0}
        fresnelSoftness={0}
        highlight={0.8}
        highlightColor="#ffc15c"
        innerZoom={1.2}
        refraction={2}
        scale={0.65}
        shapeSdfUrl="https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin"
        thickness={0.24}
      >
        <FallingLines
          angle={0}
          colorA="#dfc11e"
          colorB="#f06383"
          density={60}
          rounding={0}
          speed={0.25}
          speedVariance={0.8}
          strokeWidth={0.76}
          trailLength={0.03}
        />
        <Pixelate visible={true} />
      </Glass>
      <Dither
        colorMode="source"
        pattern="bayer2"
        pixelSize={2}
      />
      <ReflectivePlane
        blur={4.7}
        blurDistance={0.14}
        distance={0.59}
        falloff={1.91}
        height={0.75}
      />
    </Shader>
  )
}
