import { ExternalLink, Layers, BarChart3, Zap, Shield } from "lucide-react";

const FeatureCards = () => {
  const providers = [
    {
      name: "microsoft",
      icon: "https://openrouter.ai/images/icons/Microsoft.svg",
      animationClass: "animate-[float0_4s_ease-in-out_0ms_infinite]",
    },
    {
      name: "nvidia",
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256",
      animationClass: "animate-[float1_4s_ease-in-out_150ms_infinite]",
    },
    {
      name: "meta-llama",
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ai.meta.com/&size=256",
      animationClass: "animate-[float2_4s_ease-in-out_300ms_infinite]",
    },
    {
      name: "google",
      icon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
      animationClass: "animate-[float3_4s_ease-in-out_450ms_infinite]",
    },
    {
      name: "amazon",
      icon: "https://openrouter.ai/images/icons/Bedrock.svg",
      animationClass: "animate-[float4_4s_ease-in-out_600ms_infinite]",
    },
  ];

  const features = [
    {
      title: "One API for Any Model",
      description:
        "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      icon: <Layers className="inline size-6 mr-2 mb-1" />,
      link: "/models",
      linkText: "Browse all",
      visual: (
        <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              title={provider.name}
              className={`size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out ${provider.animationClass}`}
              style={{ opacity: 0.85 }}
            >
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                <div className="overflow-hidden rounded-full">
                  <img
                    width="256"
                    height="256"
                    alt={`Favicon for ${provider.name}`}
                    className="h-full w-full object-cover"
                    src={provider.icon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Higher Availability",
      description:
        "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      icon: <BarChart3 className="inline size-6 mr-2 mb-1" />,
      link: "/docs/features/uptime-optimization",
      linkText: "Learn more",
      visual: (
        <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
          <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
            anthropic/claude-3.7-sonnet
          </div>
          <svg
            width="100%"
            height="70"
            viewBox="0 0 200 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground/60"
            aria-labelledby="routing-diagram-title"
          >
            <title id="routing-diagram-title">Model routing visualization</title>
            <path
              d="M95 0 C100 40, 20 20, 10 65"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            <path
              d="M100 0 C100 20, 100 20, 100 65"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            <path
              d="M105 0 C100 40, 180 20, 190 65"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </svg>
          <div className="flex justify-between w-full">
            <ProviderIcon icon="https://openrouter.ai/images/icons/GoogleGemini.svg" />
            <ProviderIcon icon="https://openrouter.ai/images/icons/Anthropic.svg" />
            <ProviderIcon icon="https://openrouter.ai/images/icons/Bedrock.svg" />
          </div>
        </div>
      ),
    },
    {
      title: "Price and Performance",
      description:
        "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      icon: <Zap className="inline size-6 mr-2 mb-1" />,
      link: "/docs/features/provider-routing#provider-sorting",
      linkText: "Learn more",
      visual: (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-20"></div>
          </div>
          <img
            alt="Performance graph"
            width="300"
            height="150"
            className="h-full w-full object-contain"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop"
          />
        </div>
      ),
    },
    {
      title: "Custom Data Policies",
      description:
        "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
      icon: <Shield className="inline size-6 mr-2 mb-1" />,
      link: "/docs/features/privacy-and-logging",
      linkText: "View docs",
      visual: (
        <div className="flex flex-col items-center w-full max-w-52">
          <div className="flex justify-between items-end w-full px-[45px] -mb-2">
            <Shield className="size-4 text-muted-foreground" />
            <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-green-9"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Shield className="size-4 text-muted-foreground" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.3"
            stroke="currentColor"
            className="size-32 text-muted-foreground/60"
          >
            <title>Data policy visualization</title>
            <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4 md:space-y-8 max-w-screen-2xl">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={index} className="h-full" href={feature.link}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              {/* Visual section */}
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                  </div>
                  {feature.visual}
                </div>
              </div>

              {/* Content section */}
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.linkText}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const ProviderIcon = ({ icon }: { icon: string }) => (
  <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
    <div className="overflow-hidden rounded-full">
      <img
        width="256"
        height="256"
        alt="Provider icon"
        className="h-full w-full object-cover"
        src={icon}
      />
    </div>
  </div>
);

export default FeatureCards;